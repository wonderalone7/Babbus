// apiHelper.ts

class ApiHelper {
  static async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
}

export default ApiHelper;
