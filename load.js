export default function load(url = './data.txt', callback, type = 'text'){
    //1. Створення об'єкта запиту
    const ajax = new XMLHttpRequest();

    //2. Налаштування отримання даних
    ajax.addEventListener('load', _ => {
        console.timeEnd('ajax');
        let d = ajax.responseText;

        if(type === 'JSON') d = JSON.parse(d);

        callback(d);
    });

    //3. Налаштуваня відправки даних
    ajax.open('GET', url);

    //4. Відправка
    console.time('ajax');
    ajax.send();

}