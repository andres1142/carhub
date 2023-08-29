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

export function calculateCarRent(city_mpg: number, year: number) {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};