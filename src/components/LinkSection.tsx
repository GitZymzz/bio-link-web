import React from 'react';
import { SocialLink } from '../types';
import LinkCard from './LinkCard';
import '../styles/LinkSection.css';

const LinkSection: React.FC = () => {
  const links: SocialLink[] = [
    {
      id: '1',
      platform: 'WhatsApp',
      url: 'https://wa.me/6283853787611',
      icon: 'whatsapp',
      color: '#66FF66'
    },
    {
      id: '2',
      platform: 'WhatsApp',
      url: 'https://chat.whatsapp.com/Jv5SIEQV3jNGpIvWy2lmSC',
      icon: 'whatsapp',
      color: '#66FF66'
    },
    {
      id: '3',
      platform: 'Tiktok',
      url: 'https://tiktok.com/@camzym7',
      icon: 'tiktok',
      color: '#000000'
    },
    {
      id: '4',
      platform: 'Instagram',
      url: 'https://instagram.com/zymzz_',
      icon: 'instagram',
      color: '#FF0000'
    },
    {
      id: '5',
      platform: 'Telegram',
      url: 'https://t.me/camzym',
      icon: 'telegram',
      color: '#23FFFD'
    },
    {
      id: '6',
      platform: 'LinKedin',
      url: 'https://linkedin.com/zymzz7',
      icon: 'linkedin',
      color: '#1220B0'
    },
    {
      id: '7',
      platform: 'Githun',
      url: 'https://github.com/GitZymzz',
      icon: 'github',
      color: '#000000'
    }
  ];

  return (
    <div className="link-section">
      <h2 className="section-title">Connect With Me</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkCard key={link.id} link={link} index={index} />
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
