import { useTranslation } from 'react-i18next';
import './menu-panel.scss'
import MenuButton from './MenuButton/menu-button'
import MenuToggle from './MenuToggle/menu-toggle';

export default function MenuPanel() {
  const { t } = useTranslation();
  return (
    <div className='menu-panel'>
      <div className='button-section'>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_map.png')} label={t('map').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_llavero.png')} label={t('keys').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_grupo.png')} label={t('group').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_quests.png')} label={t('quest').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_clanes.png')} label={t('clan').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_home.png')} label={t('home').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_retos.png')} label={t('challenges').toUpperCase()}/>
        <MenuButton icon={require('../../../../../assets/Icons/gameplay/ico_menu_estadisticas.png')} label={t('stats').toUpperCase()}/>
      </div>
      <img src={require('../../../../../assets/Misc/main_inv_divider.png')}/>
      <div className='toggles-bar'>
        <span className='horizontal-gap10'></span>
        <MenuToggle><img src={require('../../../../../assets/Icons/gameplay/ico_chat.png')}/></MenuToggle>
        <MenuToggle><img src={require('../../../../../assets/Icons/gameplay/ico_clanes.png')}/></MenuToggle>
        <MenuToggle><img src={require('../../../../../assets/Icons/gameplay/ico_key.png')}/></MenuToggle>
        <div className='report-bug'>
          <p className='reportText'>{t('report-bug')}</p>
          <img src={require('../../../../../assets/Icons/gameplay/ico_bugs.png')}/>
        </div>
      </div>
    </div>
  )
}