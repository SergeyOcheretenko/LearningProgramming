## Фазы EventLoop

Инициализация

+ **Таймеры** - callback от запланированных таймеров
    + nextTick, microtaskQueue (Promises)
+ **pending callbacks** - callback от системных операций
    + nextTick, microtaskQueue (Promises)
+ **idle, prepare** - внутреннее использование
    + nextTick, microtaskQueue (Promises)
+ **pool** - расчёт времени и обработка событий ввода и вывода (I/O)
    + nextTick, microtaskQueue (Promises)
+ **check** - обработка setImmediate
    + nextTick, microtaskQueue (Promises)
+ **close callback** - вызов событий 'close', например, сокеты
    + nextTick, microtaskQueue (Promises)

Проверка на окончание