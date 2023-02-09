import styles from "./Background.module.css"

interface BackgroundProps{
    type?: string
}

/*
    background: #008cff;
  background: -webkit-linear-gradient(to left, #3f3f46, #64646c);
  width: 100%;
  height: 100vh;
*/

export function Background({ type = "default" } :BackgroundProps) {
    const typeBackup = "default"

    if (type !== typeBackup){
        return (
            <div className={`w-full absolute ${type} bg-primary`} >
                <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className={styles.area} >
                <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}