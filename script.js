const task = ["Напиши письмо Деду Морозу и расскажи, какой подарок хочешь на Новый год",
"Нарисуё ёлочку и лесных обитателей",
"Сделай ёлочную игрушку своими руками",
"Прочитай Новогоднюю историю",
"Попроси родителей рассказать, откуда взялась традиция встречать Рождество? ",
"Поиграй в настольную игру с родителями",
"Вырежи снежинки из бумаги",
"Сделай кормушку для птиц вместе со взрослыми",
"Укрась комнату к Рождественским праздникам",
"Прокатиcь с горки и поиграй в снежки",
"Подумай, за что и у кого нужно попросить прощения",
"Съешь мандарин",
"Слепи снеговика из снега",
"Укрась окно снежинками и другими фигурками",
"Раскрась новогоднюю картинку",
"Выучи новогоднее стихотворение",
"Всей семьёй придумайте новогоднюю историю",
"Посмотри новогодний мультик",
"Приготовь открытки на Новый год для бабушки и дедушки",
"Нарисуй Деда Мороза",
"Помоги маме испечь печенье",
"Обними маму и скажи как сильно ты её любишь",
"Обними папу и скажи как сильно ты его любишь",
"Поцелуй младшего братика (сестрёнку) и вместе посмотрете мультфильм",
"Сделай новогоднюю поделку",
"Помоги маме накрыть на стол",
"Наряди новогоднюю ёлку игрушками",
"Сочини небольшое четверостишье про Рождество или Новый год",
"Приготовь рождественский пирог с бабушкой",
"Посети каток вместе с друзьями",
"Сделай лучшему другу (подруге) рождественскую открытку",
"Время пить чай с малиновым варением... "
]

const btns = document.querySelectorAll('.btnClick');
const pars = document.querySelectorAll('.par');
 
 btns.forEach((item, index) => {
   item.addEventListener('click', () => {
     let show = task[Math.floor(Math.random() * task.length)];
      item.style.display = 'none';
      pars[index].innerHTML = show;
  })
 })

 
  const button = document.querySelector('#desember');
  button.addEventListener('click', () => {
      document.querySelector('.container').style.display = 'flex';
  })


  const hide = document.querySelector('.hide');
  hide.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
  })
























