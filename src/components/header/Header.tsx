import { FaMicrophone } from 'react-icons/fa';
import { HeaderMoreSection, LeftSection, LogoSection, SearchBar, SearchSection, StyledHeader } from './Header.styles'
import { Text } from '../../utils/Text.styles'
import { SlMenu } from 'react-icons/sl'
import { Icon } from './../../utils/Icon.styles';
import AuthButton from '../auth-button/AuthButton';
import { CgMoreVerticalAlt } from 'react-icons/cg';
import { MouseEventHandler, useEffect, useState } from 'react';
import Settings from '../settings/Settings';
import { useAppContext } from '../../context/App.context';
import { LuSearch } from 'react-icons/lu';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import YouTubeLogo from "../../assets/youtubeicon.svg";

const Header = () => {
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("")
  const { text, searchBarText, setSearchBarText } = useAppContext();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  
  useEffect(() => {
    setSearchText(transcript);
    setSearchBarText(transcript);
  }, [transcript])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <StyledHeader>
      <LeftSection>
        <Icon className='menu'>
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="">
          <img src={YouTubeLogo} width={30}/>
          <Text className='logo'>YouTube</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>
        <SearchBar>
          <input onChange={e => setSearchText(e.target.value)} value={searchText} placeholder={text.search} />
          <Icon
            data-tooltip-id='search'
            data-tooltip-content={text.search}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch size={19}/>
          </Icon>
        </SearchBar>
        <Icon
            data-tooltip-id='voiceSearch'
            data-tooltip-content={text.voiceSearch}
            onClick={SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>}
            $showBackground= {true}
            className={listening ? "listening" : ""}
          >
            <FaMicrophone size={19}/>
          </Icon>
      </SearchSection>
      <HeaderMoreSection>
        <Icon
          data-tooltip-id='settings'
          data-tooltip-content={"Settings"}
          onClick={() => setShowSetting(preValue => !preValue)}
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
        {showSetting && <Settings />}
      </HeaderMoreSection>
    </StyledHeader>
  )
}

export default Header