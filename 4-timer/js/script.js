function accDaysFromMonth(from) {
    return month.slice(from + 1).reduce((acc, val) => acc += val, 0);
}



const timer = () => {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    setInterval(() => {
        const currDate = new Date();
        const newYear = new Date(currDate.getFullYear() + 1, 0, 1);

        const diffTime = newYear - currDate;
        const second = Math.floor(diffTime / 1000) % 60;
        const minute = Math.floor(diffTime / (1000 * 60)) % 60;
        const hour = Math.floor(diffTime / (1000 * 60 * 60)) % 24;

        // Вычесть общее количество дней пропустив текущий месяц и вычесть общее количество дней от текущей даты. 
        // Вычисленное количество дней будет равно количеству дней за вычетом суммы дней в следующих месяцах 
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) - month.slice(currDate.getMonth() + 1).reduce((acc, val) => acc + val, 0);

        
        const months = month.slice(currDate.getMonth()).reduce((acc, val, index) => index, 0);
        

        console.log(`До нового года осталось: m${months} d${days} h${hour} m${minute} s${second}`);
    }, 1000);
}





timer();