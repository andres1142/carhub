export async function fetchCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const headers = {
        'X-RapidAPI-Key': 'c71934342bmsh7004b0f610885e0p1aa324jsn1e33bf331dbe',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(url, { headers: headers });
    const result = await response.json();

    return result 
}