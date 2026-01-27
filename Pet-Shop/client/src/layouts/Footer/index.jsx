import { Box } from '@mui/material'
import styles from './Footer.module.css'
import instagramIcon from '../../assets/icons/ic-instagram.svg'
import whatsappIcon from '../../assets/icons/ic-whatsapp.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.cardsGrid}>
        {/* Блок 1: Телефон */}
        <div className={styles.card}>
          <span className={styles.cardLabel}>Phone</span>
          <p className={styles.cardValue}>+49 30 915-88492</p>
        </div>

        {/* Блок 2: Соцсети */}
        <div className={styles.card}>
          <span className={styles.cardLabel}>Socials</span>
          <div className={styles.socials}>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <img
                src={instagramIcon}
                alt='Instagram'
                className={styles.socialIcon}
              />
            </a>
            <a href='https://whatsapp.com' target='_blank' rel='noreferrer'>
              <img
                src={whatsappIcon}
                alt='WhatsApp'
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>

        {/* Блок 3: Адрес */}
        <div className={styles.card}>
          <span className={styles.cardLabel}>Address</span>
          <p className={styles.cardValue}>
            Wallstraße 9-13, 10179 Berlin, Deutschland
          </p>
        </div>

        {/* Блок 4: Часы работы */}
        <div className={styles.card}>
          <span className={styles.cardLabel}>Working Hours</span>
          <p className={styles.cardValue}>24 hours a day</p>
        </div>
      </div>

      {/* Блок карты через Material UI */}
      <Box
        sx={{
          mt: '32px',
          width: '100%',
          height: { xs: '300px', md: '350px' },
          borderRadius: '12px',
          overflow: 'hidden',
          bgcolor: 'grey.200',
        }}
      >
        <iframe
          title='Map: Wallstraße 9–13, Berlin'
          src='https://www.openstreetmap.org/export/embed.html?bbox=13.4005,52.5091,13.4085,52.5131&layer=mapnik&marker=52.511116,13.404523'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          loading='lazy'
        />
      </Box>
    </footer>
  )
}
