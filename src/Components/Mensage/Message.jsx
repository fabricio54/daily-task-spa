import './MessageStyle.css'

import { useState, useEffect } from 'react';

export function Message({type, msg }) {
    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg])

    return (<>
        { visible && (
            <div className={`${styles.message} ${[type]}`}>{msg}</div>
        )}
    </>)
}