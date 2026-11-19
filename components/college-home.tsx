'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Eye, Menu, X } from 'lucide-react'

type EventItem = { date: string; month: string; category: string; title: string; description: string; accent?: boolean }

const events: EventItem[] = [
  { date: '18', month: 'НОЯ', category: 'Абитуриентам', title: 'День открытых дверей', description: 'Познакомьтесь с мастерскими, специальностями и преподавателями колледжа.' },
  { date: '21', month: 'НОЯ', category: 'Колледж', title: 'ПРОФ-БУМ-2026: профессии будущего', description: 'Студенческая инициатива о выборе профессии и возможностях региона.', accent: true },
  { date: '26', month: 'НОЯ', category: 'Наука', title: 'НИКО — старт исследовательских проектов', description: 'Приглашаем студентов представить идеи и первые результаты.' },
  { date: '02', month: 'ДЕК', category: 'Колледж', title: 'Неделя качества: учимся делать лучше', description: 'Встречи, мастер-классы и открытый разговор о качестве образования.' },
]
const filters = ['Все события', 'Абитуриентам', 'Колледж', 'Наука']

function Brand() {
  return <a href="#top" className="brand" aria-label="НГПК — на главную"><span className="brand-mark">Н<span>Г</span>ПК</span><span className="brand-name">Новополоцкий государственный<br />политехнический колледж</span></a>
}

function Header({ accessible, setAccessible }: { accessible: boolean; setAccessible: (value: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Колледж', items: ['О колледже', 'Руководство', 'Структура', 'Материальная база'] },
    { label: 'Образование', items: ['Специальности', 'Учебный процесс', 'Практика и трудоустройство'] },
    { label: 'Абитуриенту', items: ['Правила приёма', 'План набора', 'День открытых дверей'] },
    { label: 'Информация', items: ['Новости и события', 'Обращения граждан', 'Противодействие коррупции'] },
  ]
  return <header className="site-header" id="top"><div className="topline"><span>Республика Беларусь <i /> Витебская область</span><div className="topline-right"><a href="#contacts">Контакты</a><button className={`access-toggle ${accessible ? 'is-on' : ''}`} onClick={() => setAccessible(!accessible)} aria-pressed={accessible}><Eye size={16} /> Версия для слабовидящих</button></div></div><div className="nav-row"><Brand /><button className="mobile-menu" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Главная навигация">{links.map((link) => <div className="nav-item" key={link.label}><button className="nav-trigger">{link.label}<ArrowDown size={13} /></button><div className="nav-dropdown">{link.items.map((item) => <a key={item} href="#events" onClick={() => setOpen(false)}>{item}<ArrowUpRight size={13} /></a>)}</div></div>)}<a className="nav-special" href="#initiatives">Инициативы <ArrowUpRight size={14} /></a></nav></div></header>
}

function SectionHeading({ eyebrow, title, href }: { eyebrow: string; title: string; href?: string }) { return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{href && <a className="text-link" href={href}>Все материалы <ArrowRight size={16} /></a>}</div> }

function Hero() {
  return <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> Государственное учреждение образования</p><h1>Знания,<br />которые <em>работают.</em></h1><p className="hero-lead">Готовим специалистов, которые умеют создавать, проектировать и менять мир вокруг себя.</p><div className="hero-actions"><a className="button-primary" href="#education">Выбрать специальность <ArrowRight size={17} /></a><a className="text-link" href="#about">О колледже <ArrowUpRight size={16} /></a></div><div className="hero-meta"><span>Основан в 1964 году</span><span>Новополоцк · Беларусь</span></div></div><div className="hero-visual"><Image src="/ngpk-workshop.png" alt="Студент колледжа работает в современной учебной мастерской" fill priority sizes="(max-width: 760px) 100vw, 55vw" className="hero-image" /><div className="image-caption"><span>01 / Учиться на практике</span><span>Мастерские НГПК <ArrowUpRight size={13} /></span></div><div className="hero-stamp"><span>НГПК</span><strong>Профессия<br />с перспективой</strong><span>ВИТЕБСКАЯ ОБЛАСТЬ · БЕЛАРУСЬ</span></div></div><div className="hero-index">01 — 04</div></section>
}

function QuickInfo() {
  const cards = [
    { number: '01', label: 'Одно окно', title: 'Обращения и услуги', body: 'Порядок подачи обращений, административные процедуры и график приёма.', link: 'Перейти в раздел', href: '#contacts' },
    { number: '02', label: 'Приём граждан', title: 'Директор колледжа', body: 'Личный приём по предварительной записи. Вторник, 15:00–20:00.', link: 'Записаться на приём', href: 'tel:+375214500000' },
    { number: '03', label: 'Приёмная комиссия', title: '+375 (214) 50-00-00', body: 'Пн–Пт, 9:00–17:00 · г. Новополоцк, ул. Молодёжная, 12', link: 'Позвонить нам', href: 'tel:+375214500000', accent: true },
    { number: '04', label: 'Справочная', title: '+375 (214) 50-00-01', body: 'Ответим на вопросы об обучении, практике и жизни колледжа.', link: 'Связаться', href: 'tel:+375214500001' },
  ]
  return <section className="quick-section" id="contacts"><div className="quick-intro"><span className="eyebrow">Важное — рядом</span><h2>Быстрый<br />доступ</h2><p>Нужная информация и помощь — в одном месте.</p></div><div className="quick-grid">{cards.map((card) => <article className={`quick-card ${card.accent ? 'quick-card-accent' : ''}`} key={card.number}><div className="quick-top"><span>{card.number} / {card.label}</span><ArrowUpRight size={16} /></div><h3>{card.title}</h3><p>{card.body}</p><a href={card.href}>{card.link}<ArrowRight size={14} /></a></article>)}</div></section>
}

function Initiatives() {
  const items = [
    { id: '01', name: 'ПРОФ-БУМ', year: '2026', text: 'Профориентационный проект, который помогает увидеть будущее в профессии.', style: 'teal' },
    { id: '02', name: 'НИКО', year: '2026', text: 'Научно-исследовательская конференция учащихся: идеи, открытия, решения.', style: 'cream' },
    { id: '03', name: 'Год белорусской женщины', year: '2026', text: 'Год уважения, признания и новых возможностей.', style: 'amber' },
    { id: '04', name: 'Пятилетка качества', year: '2025—2029', text: 'Создаём культуру качества в образовании, труде и повседневных решениях.', style: 'dark' },
  ]
  return <section className="initiatives section-wrap" id="initiatives"><SectionHeading eyebrow="В фокусе · 2025—2029" title="Делаем вместе" /><div className="initiative-grid">{items.map((item) => <a key={item.id} className={`initiative-card initiative-${item.style}`} href="#events"><span className="initiative-number">{item.id} / ИНИЦИАТИВА</span><span className="initiative-year">{item.year}</span><h3>{item.name}</h3><p>{item.text}</p><span className="initiative-arrow"><ArrowUpRight size={19} /></span></a>)}</div></section>
}

function Events() {
  const [filter, setFilter] = useState('Все события')
  const shown = useMemo(() => filter === 'Все события' ? events : events.filter((event) => event.category === filter), [filter])
  return <section className="events-section section-wrap" id="events"><SectionHeading eyebrow="Новости колледжа" title="События" href="#events" /><div className="event-controls" role="group" aria-label="Фильтр событий">{filters.map((item) => <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}<span className="event-count">{String(shown.length).padStart(2, '0')} публикации</span></div><div className="event-grid" aria-live="polite">{shown.map((event) => <article className={`event-card ${event.accent ? 'event-featured' : ''}`} key={event.title}><div className="event-date"><strong>{event.date}</strong><span>{event.month}</span></div><div className="event-content"><span className="event-category">{event.category}</span><h3>{event.title}</h3><p>{event.description}</p><a href="#initiatives" aria-label={`Подробнее: ${event.title}`}><ArrowUpRight size={17} /></a></div></article>)}</div></section>
}

function About() { return <section className="about-strip" id="about"><span className="eyebrow">Учиться · Создавать · Расти</span><p>Колледж — это не только аудитории. Это реальные задачи, сильная команда и уверенный <em>первый шаг</em> в профессию.</p><a href="#education" className="text-link">Узнать больше <ArrowRight size={16} /></a></section> }

function Footer() {
  const columns = [
    { title: 'Колледж', links: ['Об учреждении', 'Структура и руководство', 'Материальная база', 'История колледжа'] },
    { title: 'Абитуриенту', links: ['Специальности', 'Правила приёма', 'План набора', 'Общежитие'] },
    { title: 'Информация', links: ['Новости и события', 'Одно окно', 'Обращения граждан', 'Противодействие коррупции'] },
  ]
  return <footer className="site-footer"><div className="footer-main"><div className="footer-identity"><Brand /><p>Государственное учреждение образования<br />«Новополоцкий государственный<br />политехнический колледж»</p><a href="https://ngpk.by" className="footer-url">ngpk.by <ArrowUpRight size={14} /></a></div>{columns.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href="#top" key={link}>{link}</a>)}</div>)}<div className="footer-column footer-contact"><h3>Мы на связи</h3><a href="tel:+375214500000">+375 (214) 50-00-00</a><a href="mailto:ngpk@ngpk.by">ngpk@ngpk.by</a><p>211440, Республика Беларусь,<br />г. Новополоцк, ул. Молодёжная</p><a href="#contacts">Как добраться <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© 2026 НГПК. Все права защищены.</span><div><a href="#top">Политика обработки персональных данных</a><a href="#top">Карта сайта</a></div><span>Сделано с заботой об образовании</span></div></footer>
}

export default function CollegeHome() {
  const [accessible, setAccessible] = useState(false)
  return <div className={accessible ? 'college-site accessible-mode' : 'college-site'}><Header accessible={accessible} setAccessible={setAccessible} /><main><Hero /><QuickInfo /><Initiatives /><About /><section id="education" className="education-link"><span>02 — ОБРАЗОВАНИЕ</span><h2>Профессия начинается<br />с правильного выбора.</h2><a href="#initiatives">Смотреть специальности <ArrowRight size={16} /></a></section><Events /></main><Footer /></div>
}
