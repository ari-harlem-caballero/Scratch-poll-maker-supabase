const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTY4MTE2OCwiZXhwIjoxOTU1MjU3MTY4fQ.AATQ6dkSywA8rz49s28uxVUQ5Nd7stBaDfyIez1JAU8';

export async function getUser() {
    return client.auth.user();
}

export function checkLoggedIn() {
    if (!client.auth.user()) {
        window.location = '../';
    }
}

const SUPABASE_URL = 'https://qfcjozrfufoohhzmdulq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function logout() {
    await client.auth.signOut();
}

export async function signUp(email, password) {
    await client.auth.signOut();

    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response.data;
}

export async function savePoll(question, option1, option2, votes1, votes2) {
    const repsonse = await client
        .from('poll')
        .insert([
            {
                question,
                option_1: option1,
                option_2: option2,
                votes_1: votes1,
                votes_2: votes2,
            },
        ]);
    return repsonse.data;
}

export async function getPolls() {
    const repsonse = await client
        .from('poll')
        .select();

    return repsonse.data;
}