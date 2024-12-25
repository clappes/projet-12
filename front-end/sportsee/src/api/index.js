export const getUser = async (id) => {
    try {
        let response = null;
        if(process.env.REACT_APP_MOCK === "false") {
            response = await fetch(`http://localhost:3000/user/${id}`);
        } else {
            response = await fetch(`http://localhost:3001/user/${id}.json`);
        }
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getActivity = async (id) => {
    try {
        let response = null;
        if(process.env.REACT_APP_MOCK === "false") {
            response = await fetch(`http://localhost:3000/user/${id}/activity`);
        } else {
            response = await fetch(`http://localhost:3001/activity/${id}.json`);
        }
        
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getPerformance = async (id) => {
    try {
        let response = null;
        if(process.env.REACT_APP_MOCK === "false") {
            response = await fetch(`http://localhost:3000/user/${id}/performance`);
        } else {
            response = await fetch(`http://localhost:3001/performance/${id}.json`);
        }
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}

export const getSessions = async (id) => {
    try {
        let response = null;
        if(process.env.REACT_APP_MOCK === "false") {
            response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
        } else {
            response = await fetch(`http://localhost:3001/average-sessions/${id}.json`);
        }
        const data = await response.json();

        return data.data || data
    } catch(error) {
        return null
    }
}