// DefoqFecEKDygwUJCcbnih9u
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import paisesLatitudLong from "./config.js"; // Import the configuration file
import { chromium } from "playwright";

// Create server instance
const server = new McpServer({
  name: "file-converter",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// tool saludar
server.tool(
  "saludame",
  "herramienta para saludar",
  {
    name: z.string().describe("Name to greet"),
  },
  async ({ name }) => {
    return {
      content: [
        {
          type: "text",
          text: `Hola, ${name}!`,
        },
      ],
    };
  }
);

// tool obtener vuelos de un pais
server.tool(
  "obtener_vuelos",
  "herramienta para obtener vuelos",
  {
    pais: z.string().describe("País del que se desean obtener vuelos"),
  },
  async ({ pais }) => {
    if (!paisesLatitudLong[pais]) {
      return {
        content: [
          {
            type: "text",
            text: `País no encontrado: ${pais}. Por favor, proporciona un país válido.`,
          },
        ],
      };
    }
    const { latitud, longitud } = paisesLatitudLong[pais];
    const response = await fetch(
      `https://api.adsb.lol/v2/lat/${latitud}/lon/${longitud}/dist/250`
    );
    const data = await response.json();
    const flights = data.ac;
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(flights, null, 2),
        },
      ],
    };
  }
);

// tool obtener toda la información de un vuelo
server.tool(
  "obtener_informacion_vuelo",
  "herramienta para obtener información de un vuelo",
  {
    hex: z
      .string()
      .describe("Número de vuelo del que se desea obtener información"),
  },
  async ({ hex }) => {
    const response = await fetch(`https://api.adsb.lol/v2/icao/` + hex);
    if (!response.ok) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontró información para el vuelo ${hex}.`,
          },
        ],
      };
    }
    let data = await response.json();
    data = data.ac[0];
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }
);

// tool obtener track del vuelo
server.tool(
  "obtener_track_vuelo",
  "herramienta para obtener el track de un vuelo",
  {
    vuelo: z
      .string()
      .describe("Número de vuelo del que se desea obtener el track"),
  },
  async ({ vuelo }) => {
    vuelo = vuelo.trim().toUpperCase();
    const url = `https://es.flightaware.com/live/flight/${vuelo}`;
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
      await page.goto(url, { timeout: 3000000 });
      await page.waitForSelector(".flightPageSummaryCity", { timeout: 3000000 });
      await page.waitForSelector(".destinationCity", { timeout: 3000000 });

      const origen = await page
        .locator(".flightPageSummaryCity")
        .first()
        .innerText();
      const destino = await page
        .locator(".destinationCity")
        .first()
        .innerText();

      return {
        content: [
          {
            type: "text",
            text: `Origen: ${origen.trim()} - Destino: ${destino.trim()}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error al obtener el track del vuelo: ${String(error)}`,
          },
        ],
      };
    } finally {
      await browser.close();
    }
  }
);

// tool obtener información de los aeropuertos de un país
server.tool(
  "obtener_aeropuertos",
  "herramienta para obtener información de los aeropuertos de un país",
  {
    pais: z.string().describe("País del que se desean obtener aeropuertos"),
  },
  async ({ pais }) => {
    const allAirports: any[] = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      const response = await fetch(
        `https://airportgap.com/api/airports?page=${page}`
      );
      if (!response.ok) {
        return {
          content: [
            {
              type: "text",
              text: `Error al obtener aeropuertos en la página ${page}.`,
            },
          ],
        };
      }

      const data = await response.json();
      const airports = data.data.filter(
        (airport: any) => airport.attributes.country === pais
      );
      allAirports.push(...airports);

      hasMorePages = data.meta && data.meta.next_page !== null;
      page++;
    }

    if (allAirports.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontraron aeropuertos en el país ${pais}.`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(allAirports, null, 2),
        },
      ],
    };
  }
);


// tool obtener información de un aeropuerto
server.tool(
  "obtener_informacion_aeropuerto",
  "herramienta para obtener información de un aeropuerto",
  {
    icao: z
      .string()
      .describe(
        "Código ICAO del aeropuerto del que se desea obtener información"
      ),
  },
  async ({ icao }) => {
    const response = await fetch(`https://airportgap.com/api/airports/${icao}`);
    if (!response.ok) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontró información para el aeropuerto con código ICAO ${icao}. Debe ser un código válido.`,
          },
        ],
      };
    }
    const data = await response.json();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }
);

// tool obtener información de un país
server.tool(
  "obtener_informacion_pais",
  "herramienta para obtener información de un país",
  {
    pais: z.string().describe("País del que se desea obtener información"),
  },
  async ({ pais }) => {
    if (!paisesLatitudLong[pais]) {
      return {
        content: [
          {
            type: "text",
            text: `País no encontrado: ${pais}. Por favor, proporciona un país válido.`,
          },
        ],
      };
    }
    const { latitud, longitud } = paisesLatitudLong[pais];
    return {
      content: [
        {
          type: "text",
          text: `Información del país ${pais}:\nLatitud: ${latitud}\nLongitud: ${longitud}`,
        },
      ],
    };
  }
);

// crear un txt con la información de un país
server.tool(
  "crear_txt_pais",
  "herramienta para crear un archivo txt con la información de un país",
  {
    pais: z.string().describe("País del que se desea crear el archivo txt"),
  },
  async ({ pais }) => {
    if (!paisesLatitudLong[pais]) {
      return {
        content: [
          {
            type: "text",
            text: `País no encontrado: ${pais}. Por favor, proporciona un país válido.`,
          },
        ],
      };
    }
    const { latitud, longitud } = paisesLatitudLong[pais];
    const content = `Información del país ${pais}:\nLatitud: ${latitud}\nLongitud: ${longitud}`;
    
    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Convert Blob to base64 string
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    await new Promise((resolve) => reader.onloadend = resolve);
    
    return {
      content: [
        {
          type: "text",
          text: `Archivo creado con la información del país ${pais}.`,
        },
        {
          type: "resource",
          resource: {
            text: `${pais}_info.txt`,
            uri: reader.result as string,
            mimeType: "text/plain",
          },
        },
      ],
    };
  }
);


// Start the server with Stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
