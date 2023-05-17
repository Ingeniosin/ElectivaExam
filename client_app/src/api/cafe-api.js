export const getCafes = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const response = await fetch("/api/cafe", requestOptions);
    return await response.json()
}
