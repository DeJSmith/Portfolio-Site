import React from 'react'
import {FlexSection, TextWrapper} from '../../elements/globalElements';
import {Frame} from './PreviewElements';
import theme from '../../theme/theme';
import {FaStarOfLife} from 'react-icons/fa'
const LivePreview = () => {
    return (
        <FlexSection >
        <strong style={{ color: `${theme.colorPrimary}`, fontSize: "2rem", marginTop:'2rem', marginBottom:'2rem' }}>
          <FaStarOfLife style={{width: '2rem', height:'auto', marginRight: '.5rem', color: `${theme.colorSecondary}`}} />Astar Visulisation Live
        </strong>
            <TextWrapper style={{marginBottom: '2rem'}}>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto! Quo earum laboriosam ipsam ad totam ea autem tenetur ipsa nemo qui laborum ullam excepturi asperiores laudantium, molestiae ipsum illum?Sapiente, quis? Dignissimos voluptatem quo rem libero inventore tempore dolore asperiores ipsum sint adipisci minus harum repellendus quos, nihil, qui nam iusto. Explicabo, porro? Vel reiciendis cumque itaque assumenda sunt?
                </div>
            </TextWrapper>

            <Frame src=" https://dejsmith.github.io/AstarViz/" frameborder="0" ></Frame>
            
        </FlexSection>
    )
}

export default LivePreview
