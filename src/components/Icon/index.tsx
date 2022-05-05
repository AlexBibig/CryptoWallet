import React from 'react';

import Bar from '~assets/icons/bar.svg';
import Bell from '~assets/icons/bell.svg';
import Box from '~assets/icons/box.svg';
import Briefcase from '~assets/icons/briefcase.svg';
import Camera from '~assets/icons/camera.svg';
import Cart from '~assets/icons/cart.svg';
import Chart from '~assets/icons/chart.svg';
import Check from '~assets/icons/check.svg';
import ChevronDown from '~assets/icons/chevron-down.svg';
import ChevronLeft from '~assets/icons/chevron-left.svg';
import ChevronRight from '~assets/icons/chevron-right.svg';
import ChevronUp from '~assets/icons/chevron-up.svg';
import Circle from '~assets/icons/circle.svg';
import Clipboard from '~assets/icons/clipboard.svg';
import Clock from '~assets/icons/clock.svg';
import Close from '~assets/icons/close.svg';
import CreditCard from '~assets/icons/credit-card.svg';
import Database from '~assets/icons/database.svg';
import Dollar from '~assets/icons/dollar.svg';
import Edit from '~assets/icons/edit.svg';
import Eye from '~assets/icons/eye.svg';
import EyeClosed from '~assets/icons/eye-closed.svg';
import Gift from '~assets/icons/gift.svg';
import Globe from '~assets/icons/globe.svg';
import Heart from '~assets/icons/heart.svg';
import Home from '~assets/icons/home.svg';
import Info from '~assets/icons/info.svg';
import Lock from '~assets/icons/lock.svg';
import Mail from '~assets/icons/mail.svg';
import Map from '~assets/icons/map.svg';
import MapPin from '~assets/icons/map-pin.svg';
import Menu from '~assets/icons/menu.svg';
import Message from '~assets/icons/message.svg';
import Music from '~assets/icons/music.svg';
import Pause from '~assets/icons/pause.svg';
import Percent from '~assets/icons/percent.svg';
import Phone from '~assets/icons/phone.svg';
import Play from '~assets/icons/play.svg';
import Plus from '~assets/icons/plus.svg';
import Refresh from '~assets/icons/refresh.svg';
import Search from '~assets/icons/search.svg';
import Send from '~assets/icons/send.svg';
import Share from '~assets/icons/share.svg';
import Shield from '~assets/icons/shield.svg';
import Shopping from '~assets/icons/shopping.svg';
import Star from '~assets/icons/star.svg';
import ThumbsDown from '~assets/icons/thumbs-down.svg';
import ThumbsUp from '~assets/icons/thumbs-up.svg';
import Trash from '~assets/icons/trash.svg';
import User from '~assets/icons/user.svg';
import Video from '~assets/icons/video.svg';
import Zap from '~assets/icons/zap.svg';
import { colors } from '~theme';

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  color?: keyof typeof colors;
}

const Icon: React.FC<IconProps> = ({
  name = '',
  width = 24,
  height = 24,
  color = colors.black,
}) => {
  switch (name) {
    case 'bar':
      return <Bar width={width} height={height} color={color} />;
    case 'bell':
      return <Bell width={width} height={height} color={color} />;
    case 'box':
      return <Box width={width} height={height} color={color} />;
    case 'briefcase':
      return <Briefcase width={width} height={height} color={color} />;
    case 'camera':
      return <Camera width={width} height={height} color={color} />;
    case 'cart':
      return <Cart width={width} height={height} color={color} />;
    case 'chart':
      return <Chart width={width} height={height} color={color} />;
    case 'check':
      return <Check width={width} height={height} color={color} />;
    case 'chevron-down':
      return <ChevronDown width={width} height={height} color={color} />;
    case 'chevron-left':
      return <ChevronLeft width={width} height={height} color={color} />;
    case 'chevron-right':
      return <ChevronRight width={width} height={height} color={color} />;
    case 'chevron-up':
      return <ChevronUp width={width} height={height} color={color} />;
    case 'circle':
      return <Circle width={width} height={height} color={color} />;
    case 'clipboard':
      return <Clipboard width={width} height={height} color={color} />;
    case 'clock':
      return <Clock width={width} height={height} color={color} />;
    case 'close':
      return <Close width={width} height={height} color={color} />;
    case 'credit-card':
      return <CreditCard width={width} height={height} color={color} />;
    case 'database':
      return <Database width={width} height={height} color={color} />;
    case 'dollar':
      return <Dollar width={width} height={height} color={color} />;
    case 'edit':
      return <Edit width={width} height={height} color={color} />;
    case 'eye-closed':
      return <EyeClosed width={width} height={height} color={color} />;
    case 'eye':
      return <Eye width={width} height={height} color={color} />;
    case 'gift':
      return <Gift width={width} height={height} color={color} />;
    case 'globe':
      return <Globe width={width} height={height} color={color} />;
    case 'heart':
      return <Heart width={width} height={height} color={color} />;
    case 'home':
      return <Home width={width} height={height} color={color} />;
    case 'info':
      return <Info width={width} height={height} color={color} />;
    case 'lock':
      return <Lock width={width} height={height} color={color} />;
    case 'mail':
      return <Mail width={width} height={height} color={color} />;
    case 'map-pin':
      return <MapPin width={width} height={height} color={color} />;
    case 'map':
      return <Map width={width} height={height} color={color} />;
    case 'menu':
      return <Menu width={width} height={height} color={color} />;
    case 'message':
      return <Message width={width} height={height} color={color} />;
    case 'music':
      return <Music width={width} height={height} color={color} />;
    case 'pause':
      return <Pause width={width} height={height} color={color} />;
    case 'percent':
      return <Percent width={width} height={height} color={color} />;
    case 'phone':
      return <Phone width={width} height={height} color={color} />;
    case 'play':
      return <Play width={width} height={height} color={color} />;
    case 'plus':
      return <Plus width={width} height={height} color={color} />;
    case 'refresh':
      return <Refresh width={width} height={height} color={color} />;
    case 'search':
      return <Search width={width} height={height} color={color} />;
    case 'send':
      return <Send width={width} height={height} color={color} />;
    case 'share':
      return <Share width={width} height={height} color={color} />;
    case 'shield':
      return <Shield width={width} height={height} color={color} />;
    case 'shopping':
      return <Shopping width={width} height={height} color={color} />;
    case 'star':
      return <Star width={width} height={height} color={color} />;
    case 'thumbs-down':
      return <ThumbsDown width={width} height={height} color={color} />;
    case 'thumbs-up':
      return <ThumbsUp width={width} height={height} color={color} />;
    case 'trash':
      return <Trash width={width} height={height} color={color} />;
    case 'user':
      return <User width={width} height={height} color={color} />;
    case 'video':
      return <Video width={width} height={height} color={color} />;
    case 'zap':
      return <Zap width={width} height={height} color={color} />;
    default:
      return null;
  }
};

export default Icon;
