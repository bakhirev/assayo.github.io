[title]:# "Автоматические рекомендации по вашему проекту"
[short]:# "Assayo анализирует ваши логи и даёт советы"
[long]:# "Assayo анализирует git log и ищет плохие паттерны управления или разработки. Вы можете обнаружить проблему в команде на ранней стадии."
[tags]:# "git, bitbucket, gitlab, log, stat, statistic, гит, лог, статистика, анализ,  рекомендации, советы, проблемы, инсайды"
[recommendations]:# "personal_achievements, team_money"
[youtube]:# "jwCp_-bhrCQ"

# Рекомендации

Многие шаблоны поведения сотрудника или ситуации, связанные с управлением отделом, имеют повторяющиеся паттерны в данных. Прогоняя и исследуя разные логи git мы научили [нашу систему](/) находить эти закономерности или подсчитывать мат. ожидания тех или иных событий.

Теперь, на основании `git log` [Assayo](/) выдаёт рекомендации или резюмирует информацию о состоянии дел в отделе разработки.

<img src="../../../assets/images/assayo/recommendations.png" title="Нарезка скриншотов Assayo с рекомендациями основанными на логах git" />

## Типы рекомендаций

- Предупреждение. Выделены красным цветом и выдается, когда какие-то параметры очень сильно отклонились от нормы. Как правило, требуют безотлогательных решений.
- Замечание. Выделены оранжевым цветом. Некий негативный тренд, который еще не стал критической проблемой, но на который стоит обратить внимание и взять на контроль.
- Общая информация. Выделяется синим цветом. Представляет из себя просто некую сводную справку по ряду показателей. Пытается подчеркнуть какую-то основную метрику в отображаемых данных. 
- Совет. Обозначены зеленым цветом. Это набор общих советов для руководителя группы или отдела. Своего рода набор лучших практик, которые помогут повысить производительность отдела.

<img src="../../../assets/images/assayo/recommendations_2.png" title="Нарезка скриншотов Assayo с рекомендациями основанными на логах git" />

## Почему не ИИ

Система рекомендаций в первую очередь опирается на зашитые в систему паттерны. Почему же мы не можем отдать это поведение полностью на модуль ИИ?

Потому что при управление реальным проектом на важен не только сам вывод, но и то, каким образом он был получен. В конце каждой рекомендации, наша система описывает алгоритм подсчета. Зная алгоритм вы можете сами оценить правильность и ценность данной рекомендации и либо согласиться с ней, либо отбросить как ошибочную.

Модуль ИИ в свою очередь работает как черный ящик, и в данный момент не может описать то, каким образом он сделал вывод. Поэтому его можно использовать только для рекомендаций типа "Общая информация" и "Совет".

## Ваша история

Присылайте нам свои истории о работе отдела и его метриках. Мы внимательно ознакомимся с ними и добавим ваш случай в общую базу паттернов. Таким образом, система накапливает компетенцию абсолютно разных руководителей и компаний, чтобы в будущем выдать вам еще более узкие и точные рекомендации и советы.
