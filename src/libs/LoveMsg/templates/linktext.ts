/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

import dayjs, { weekToday } from '../../../utils/dayjs'
import { getConfig } from '../../../utils/getConfig'

const CONFIG = getConfig().loveMsg

export const textTemplate = (data: TextTemplateProps) => {
  const { oneWord } = data

  let text = ''

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }

  return {
    msgtype: 'text',
    text: {
      content: text + `\n\n<a href='`+`${CONFIG.text_url}`+`'>💖</a>`,
    },
  }
}
