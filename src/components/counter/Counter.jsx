import React from "react";
import cls from '../counter/Counter.module.scss'
import axios from "axios";
import { IoPeopleOutline, IoCardOutline, IoCalendarOutline, IoGlobeOutline } from 'react-icons/io5'
import { $api } from "../../helpers/constant/index";


export const Counter = () => {
  const [counterValues, setCounterValues] = React.useState([])

  const counterTitles = [
    {
      id: 1,
      icon: <IoPeopleOutline />,
      title: 'Нас уже',
    },
    {
      id: 2,
      icon: <IoGlobeOutline />,
      title: 'Онлайн'
    },
    {
      id: 3,
      icon: <IoCardOutline />,
      title: 'Выплачено',
    },
    {
      id: 4,
      icon: <IoCalendarOutline />,
      title: 'Работаем',
    },
  ]


  axios
    .get("https://04f9-80-94-250-65.eu.ngrok.io/api/v2/users")
    .then((res) => {
      console.log(res.data);
      setCounterValues(res);
    })
    .catch((error) => console.log(error));

  return (
    <>
      <h1 className={cls.statistic}>СТАТИСТИКА САЙТА</h1>
      <div className={cls.counter}>
        {
          counterTitles.map(item => (
            <div key={item.id} className={cls.counter__box}>
              <span className={cls.counter__box_icon}> {item.icon} </span>
              <h1 className={cls.counter__box_title}> {item.title} </h1>
              <h1 className={cls.counter__box_num}> {} </h1>
            </div>
          ))
        }
      </div>
    </>
  )
}