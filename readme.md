
  **Посилання**
    
-   [LearnJS Документ](https://uk.javascript.info/document)

-   [LearnJS Вступ до подій](https://uk.javascript.info/events)

-   [LearnJS Події миші](https://uk.javascript.info/mouse-events-basics)


   ____________________________  

**Практика**

## Morse

You have to write a simple [Morse](https://en.wikipedia.org/wiki/Morse_code) code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal [SOS](https://en.wikipedia.org/wiki/SOS) (that was first issued by [Titanic](https://en.wikipedia.org/wiki/Titanic)), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

Good luck!  

**Examples:**
 
> decodeMorse('.... . -.-- .--- ..- -.. .') //should return "HEY JUDE"


## Small tasks

- Написати функцію, яка приймає двоцифрове число і повертає його в текстовому вигляді. Наприклад: 35 – тридцять п'ять, 89 – вісімдесят дев'ять, 12 – дванадцять.
- Написати функцію, яка приймає рядок та виводить статистику про неї: кількість літер, кількість цифр та кількість інших знаків.
- Написати функцію, яка замінює в отриманому рядку великі літери на маленькі, малі – на великі, а цифри – на знак нижнього підкреслення.

## Клікер
*(опціонально)*

Створити html-сторінку з клікером. 
- При кліку на кнопку "Додати" рахунок додається на 1
- При кліку на кнопку "Відняти" рахунок віднімається на 1

![image](https://user-images.githubusercontent.com/9075641/172421161-b90104bd-476d-4518-b30b-bbcacc6a5209.png)