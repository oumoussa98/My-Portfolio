import Vue from 'vue'
import OhVueIcon from 'oh-vue-icons/components/Icon'

import {
  FaHome,
  BiInfoCircleFill,
  RiContactsBookFill,
  LaBlogSolid,
  BiFacebook,
  BiTwitter,
  BiInstagram,
  BiGithub,
  BiLinkedin,
  SiNetlify,
  ViFileTypeNode,
  ViFileTypeVue,
  SiVuetify,
  ViFileTypeMongo,
  ViFileTypeMysql,
  ViFileTypeScss,
  ViFileTypeScss2,
  ViFileTypeHtml,
  ViFileTypeCss,
  ViFileTypeJs,
  ViFileTypeNuxt,
  ViFileTypeGit,
  ViFileTypeGridsome,
  ViFileTypeWebpack,
  FcLinux,
} from 'oh-vue-icons/icons'

const icons = [
  FaHome,
  BiInfoCircleFill,
  LaBlogSolid,
  RiContactsBookFill,
  BiFacebook,
  BiTwitter,
  BiInstagram,
  BiGithub,
  BiLinkedin,
  SiNetlify,
  ViFileTypeNode,
  ViFileTypeVue,
  SiVuetify,
  ViFileTypeMongo,
  ViFileTypeMysql,
  ViFileTypeScss,
  ViFileTypeScss2,
  ViFileTypeHtml,
  ViFileTypeCss,
  ViFileTypeJs,
  ViFileTypeNuxt,
  ViFileTypeGit,
  ViFileTypeGridsome,
  ViFileTypeWebpack,
  FcLinux,
]

OhVueIcon.add(icons)

Vue.component('VIcon', OhVueIcon)
