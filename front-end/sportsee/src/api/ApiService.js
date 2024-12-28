class ApiService {
    constructor(mock = process.env.REACT_APP_MOCK === "true") {
        console.log("REACT_APP_MOCK value:", process.env.REACT_APP_MOCK);
        this.useMock = mock;
        this.baseUrl = this.useMock ? "http://localhost:3001" : "http://localhost:3000";
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            return data.data || data;
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error);
            return null;
        }
    }

    getUser(id) {
        const url = this.useMock
            ? `${this.baseUrl}/user/${id}.json`
            : `${this.baseUrl}/user/${id}`;
            console.log("Fetching user data from URL:", url);
        return this.fetchData(url);
    }

    getActivity(id) {
        const url = this.useMock
            ? `${this.baseUrl}/activity/${id}.json`
            : `${this.baseUrl}/user/${id}/activity`;
        return this.fetchData(url);
    }

    getPerformance(id) {
        const url = this.useMock
            ? `${this.baseUrl}/performance/${id}.json`
            : `${this.baseUrl}/user/${id}/performance`;
        return this.fetchData(url);
    }

    getSessions(id) {
        const url = this.useMock
            ? `${this.baseUrl}/average-sessions/${id}.json`
            : `${this.baseUrl}/user/${id}/average-sessions`;
        return this.fetchData(url);
    }
}

export default ApiService;
