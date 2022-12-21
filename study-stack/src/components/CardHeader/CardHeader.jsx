import style from './cardheader.module.scss';

export default function CardHeader() {
  return (
    <div className={style.container}>
        <div className={style.item}>English</div>
        <div className={style.item}>Transcription</div>
        <div className={style.item}>Russian</div>
        <div className={style.item}>Tag</div>
        <div className={style.item}>Edit</div>
    </div>
  )
}
