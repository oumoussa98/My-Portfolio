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
]

OhVueIcon.add(icons)

Vue.component('v-icon', OhVueIcon)
