import React from 'react'
import { ContentHolder, ContentName, PlainText, TextDivider } from '../styles'

interface Props {}

/**
 * Section with info about myself
 */
function InfoSection(props: Props) {
  const {} = props
  return (
    <ContentHolder>
      <ContentName>About Me</ContentName>
      <PlainText>
        Yo wasup guys I'm just cool-ass dev, who you wanna pay money.
      </PlainText>
      <PlainText>Looking for a remote part-time React Dev position;)</PlainText>
      <TextDivider />
      <PlainText>
        My ideal life is look like this - I sniffing cocaine outta model-hoe
        butt, on my yacht, somewhere in Mongo-Congo. While my multiple sources
        of income generating me enough money to buy this Mongo-Congo and install
        Solar Systems everywhere.
      </PlainText>
      <PlainText>
        I would like to solve trash issue in the world, because I'm cool.
      </PlainText>
    </ContentHolder>
  )
}

export default InfoSection
