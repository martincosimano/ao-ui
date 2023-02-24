import { useTranslation } from 'react-i18next';
import LoginButton from '../LogInButton/login-button'
import './char-select-bottom.scss'

export default function CharSelectBottom() {
  const { t } = useTranslation();
  return (
    <div className='char-selection-bottom'>
      <div className='character-details'>
        <div className='section-divider'></div>
        <div className='section-divider'>
          <div className='seleccion-detais'>
            <div className='text-area'>
              <p>character name</p>
              <p>character name</p>
              <p>character name</p>
            </div>
          </div>
        </div>
        <div className='section-divider'></div>
      </div>
      <div className='bottom-leather'>
      <div className='button-area'>
        <div className='bar-layer'>
          <div className='bar-img'></div>
        </div>
        <div className='button-layer'>
          <LoginButton>{t('create character').toUpperCase()}</LoginButton>
          <LoginButton isRed={true}>{t('play').toUpperCase()}</LoginButton>
        </div>
      </div>
      </div>
    </div>
  )
}