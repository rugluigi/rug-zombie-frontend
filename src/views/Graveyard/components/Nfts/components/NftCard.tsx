import React from 'react'
import styled from 'styled-components'
import { nftById } from 'redux/get'
import Video from 'components/Video'
import PreviewVideo from 'components/Video/PreviewVideo'

const Card = styled.div`
  height: 450px;
  background: #151E21;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 15px;
`;
const PreviewDiv = styled.div`
  height: 240px;
  min-width: 300px;
  max-width: 300px;
`

const PreviewImage = styled.img`
  height: 240px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
`;

const PreviewVid = styled(PreviewVideo)`
  height: 240px;
  min-width: 300px;
  max-width: 300px;
  border-radius: 20px 20px 0px 0px; 
  object-fit: cover;
`;

const Title = styled.div`
  text-align: left;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
  padding-right: 30px;
  padding-left: 30px;
`;

const RarityText = styled.div`
  text-align: left;
  font: normal normal normal 14px/30px Poppins;
  letter-spacing: 0px;
  color: #30C00D;
  padding-right: 30px;
  padding-left: 30px;
`;


const SubText = styled.span`
  text-align: left;
  font: normal normal normal 16px/30px Poppins;
  letter-spacing: 0px;
`;

interface CollectionCardProps {
  id: number;
}

const NftCard: React.FC<CollectionCardProps> = ({ id }) => {
  const { name, path, totalSupply, rarity, type  } = nftById(id)
  return <Card>
    <PreviewDiv>
      {type === 'image'
        ? <PreviewImage src={path} alt={`${name} NFT`} />
        : <PreviewVid path={path} />
      }
    </PreviewDiv>
    <div style={{paddingTop: '20px'}}/>
    <RarityText>{rarity}</RarityText>
    <div style={{paddingTop: '10px'}}/>
    <Title>{name}</Title>
    <div style={{paddingTop: '22px'}}/>
    <p style={{paddingLeft: '30px'}}>
      <SubText style={{color: '#6B7682'}}>Total supply:&nbsp;&nbsp;</SubText>
      <SubText style={{color: '#FFFFFF'}}>{totalSupply.toString()}</SubText>
    </p>
  </Card>
}

export default NftCard