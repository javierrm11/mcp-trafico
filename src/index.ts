import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import paisesLatitudLong from "./config.js"; // Import the configuration file

// Create server instance
const server = new McpServer({
    name: "file-converter",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

// tool saludate
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
                    text: `Hola, ${name}!`
                }
            ]
        };
    }
)

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
                        text: `País no encontrado: ${pais}. Por favor, proporciona un país válido.`
                    }
                ]
            };
        }
        const { latitud, longitud } = paisesLatitudLong[pais];
        const response = await fetch(`https://api.adsb.lol/v2/lat/${latitud}/lon/${longitud}/dist/250`);
        const data = await response.json();
        const flights = data.ac;
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(flights, null, 2)
                }
            ]
        };

    }
);

// tool obtener toda la información de un vuelo
server.tool(
    "obtener_informacion_vuelo",
    "herramienta para obtener información de un vuelo",
    {
        hex: z.string().describe("Número de vuelo del que se desea obtener información"),
    },
    async ({ hex }) => {
        const response = await fetch(`https://api.adsb.lol/v2/icao/` + hex)
        if (!response.ok) {
            return {
                content: [
                    {
                        type: "text",
                        text: `No se encontró información para el vuelo ${hex}.`
                    }
                ]
            };
        }
        let data = await response.json();
        data = data.ac[0];
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(data, null, 2)
                }
            ]
        };

    }
);

// Start the server with Stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);