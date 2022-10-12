import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
    <div className={['container', styles.headerImageWrapper].join(' ')}>
      <img src={logo} className={styles.headerImage} />
    </div>
  </div>
  )
}

export default Header