export default (jobId: string) => {
  switch (jobId) {
    case "marketing-and-economy":
      return "MaE";
    case "game":
      return "Game";
    case "cybersecurity-web":
      return "CS-Web";
    case "cybersecurity-app":
      return "CS-App";
    case "ai-machine-learning":
      return "AI-ML";
    case "ai-computer-vision":
      return "AI-CV";
    case "ai-natural-language-processing":
      return "AI-NLP";
    case "web-frontend":
      return "Web-Frontend";
    case "web-backend":
      return "Web-Backend";
    case "web-ui-ux":
      return "Web-UIUX";
    case "app-desktop":
      return "App-Desktop";
    case "app-embedded":
      return "App-Embedded";
    default:
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid jobId",
      });
  }
};
