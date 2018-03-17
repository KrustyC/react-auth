import BaseText from './BaseText'

const Paragraph = BaseText.withComponent('p')
export default Paragraph.extend`
  color: ${props => props.theme.colors.text};
  line-height: 1.65;
`
