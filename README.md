# IgorSushko-Test-frontend-2step-FSD
Этот задание выполнено как тестовое для компании https://www.fullstack-development.com/

В папке "page images" лежат .png с макетами страниц для удобства проверки PerfectPixel

Клонирование проекта `git clone https://github.com/IgorSushko1/IgorSushko-Test-frontend-2step-FSD`

Установка `npm install`.

Запуск версии для разработки с webpack dev server `npm run dev:dev`.
Адреса для отслеживания изменений, при использовании webpack dev server:
`http://localhost:9000/landing-one.html`
`http://localhost:9000/registration-sign-up.html`
`http://localhost:9000/registration-sign-in.html`
`http://localhost:9000/search-page.html`
`http://localhost:9000/room.html`

Запуск версии для разработки `npm run dev`.

Запуск версии для клиента `npm run prod`.

GitHub Pages :

https://igorsushko1.github.io/IgorSushko-Test-frontend-2step-FSD/dist/room.html

https://igorsushko1.github.io/IgorSushko-Test-frontend-2step-FSD/dist/landing-one.html

https://igorsushko1.github.io/IgorSushko-Test-frontend-2step-FSD/dist/registration-sign-up.html

https://igorsushko1.github.io/IgorSushko-Test-frontend-2step-FSD/dist/registration-sign-in.html

https://igorsushko1.github.io/IgorSushko-Test-frontend-2step-FSD/dist/search-page.html

При его выполнении я научился:

1)применять webpack, pug, scss.

2)Подключать плагины.

3)Изменять плагины

3.1)для календаря был настроен внешний вид, добавлены способы вывода в одно или два поля, в зависимости от требований
информация выводилась либо как "19.09.2019 - 20.09.2019" либо как "19 сен - 20 сен"

3.2)для выпадающего списка с подсчетом различных вещей был настроен внешний вид,
вид получаемой информации, а так же различные объединения подсчитаных вещей по категориям(или раздельный подсчет), склонение
существительных в зависимости от числительного(один диван, два дивана, пять диванов)

3.3)для слайдера с ценой изменены поля вывода, зафиксированы как на макете, настроен внешний вид, исправлен момент в плагине
когда два ползунка оказывались в одной точке - поле вывода значения отображало информацию только с одной точки,
вторая диактивировалась. пофиксил.

4)использовать PerfectPixel. В данном задании хотелось подогнать каждый элемент максимально близко поэтому практически каждый элемент
был подогнан вручную, при простой компоновке по сетке многократно повторяемые элементы(такие как преимущества номера) не бились.

Какие вещи остались не до конца решены - картинки лежат в одной папке, а не по подпапкам со страницами или блоками? Не адаптирован для людей с органиченными возможностями и для мобильных устройств.
