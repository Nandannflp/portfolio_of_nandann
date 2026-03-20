import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";

let transportInstance: WebStandardStreamableHTTPServerTransport | null = null;

export function getMcpTransport() {
  if (transportInstance) {
    return transportInstance;
  }

  const server = new McpServer({
    name: "nandann-portfolio",
    version: "1.0.0",
  });

  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: () => crypto.randomUUID(),
  });


  // Register portfolio-specific tools
  server.tool(
    "get_projects",
    "Get a list of Nandann's masterpiece and recent projects.",
    { /* no arguments */ },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `Masterpiece Project: "Start your career journey in just 3 days!" (https://achivcreations.lovable.app/) - A comprehensive, high-converting digital ecosystem built to accelerate professional growth and visibility.
            
Other recent builds:
- AI-powered websites
- High converting landing pages
- Digital marketing funnels
- Automated lead generation systems
- Business tools powered by AI
- Visual assets for creators and brands
- Modern digital infrastructures
- AI Visual Designer
- AI Music Producer`,
          },
        ],
      };
    }
  );

  server.tool(
    "get_skills",
    "Get Nandann's core skills and expertise.",
    { /* no arguments */ },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `Roles: AI Strategist, Business Coach, Entrepreneur (based in Ponda, Goa, India).

Core Philosophy: Empowering individuals and businesses through strategic AI integration, mindful business practices, and cutting-edge digital infrastructure.
Focus areas:
- Elevating brands with AI-driven digital ecosystems.
- Guiding professionals to build skills, income, and confidence.
- Developing high-converting landing pages and automated lead generation systems.`,
          },
        ],
      };
    }
  );

  server.tool(
    "get_contact_info",
    "Get Nandann's contact links and social media profiles.",
    { /* no arguments */ },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `Website: https://nandannshetye.online/
LinkedIn: https://www.linkedin.com/in/nandann-shetye/
Instagram: https://www.instagram.com/nandann_shetye/`,
          },
        ],
      };
    }
  );

  // Connect the server to the transport AFTER registering tools
  server.connect(transport);

  transportInstance = transport;
  return transport;
}
