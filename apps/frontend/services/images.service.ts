import { ListCatalogResponse } from "square";
/* const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api"; */
const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API;
class ImagesService {
  async fetchImages(): Promise<ListCatalogResponse | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/image`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching images:", error);
      return null;
    }
  }
}

export default new ImagesService();
