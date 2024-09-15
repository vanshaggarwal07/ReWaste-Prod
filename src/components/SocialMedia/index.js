import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiSlack,
} from 'react-icons/fi'
import AppLink from '../AppLink'

import styles from './SocialMedia.module.sass'

const socialMedia = [
  {
    Icon: FiTwitter,
    url: 'https://twitter.com/',
  },
  {
    Icon: FiFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    Icon: FiLinkedin,
    url: 'https://www.linkedin.com/',
  },
  {
    Icon: FiYoutube,
    url: 'https://www.youtube.com/',
  },
  {
    Icon: FiSlack,
    url: 'https://www.slack.com',
  },
]

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      {socialMedia?.map(({ Icon, url }, index) => (
        <AppLink key={index} target="_blank" href={url}>
          <Icon className={styles.icon} />
        </AppLink>
      ))}
    </div>
  )
}

export default SocialMedia
