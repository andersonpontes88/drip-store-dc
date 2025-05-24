import Logo from '../Logo';
import CartImage from '../../assets/icons/Carrinho.svg';
import { BtnNavLink, Container, StyledNavLink } from './styles';
import SearchIcon from '../../assets/icons/Search.svg';
import MenuIcon from '../../assets/icons/Menu.svg';
import MenuVertIcon from '../../assets/icons/Menu-vertical.svg';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PrimaryBtn } from '../Buttons';
import { InputDefault } from '../Input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para controlar a visibilidade do campo de pesquisa
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  const navigate = useNavigate();

  // Obter a localização atual
  const location = useLocation();

  // Verifica se estamos em uma página de autenticação
  const isAuthPage = ['/login', '/register', '/create-account'].includes(
    location.pathname
  );

  // Verificar o tamanho da tela quando o componente montar e quando a janela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 460;
      setIsMobile(newIsMobile);

      // Quando não for mobile, sempre mostrar a busca
      // Quando for mobile, manter o estado atual ou ocultar se estiver mudando para mobile
      if (!newIsMobile) {
        setShowSearch(true);
      } else if (isMobile !== newIsMobile) {
        // Quando mudar de desktop para mobile, esconder a busca
        setShowSearch(false);
      }
    };

    // Definir o estado inicial
    handleResize();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpar listener quando o componente desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenu(!showMenu);
  };

  // Função para lidar com a mudança no campo de pesquisa
  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  // Função para mostrar ou ocultar o campo de pesquisa
  const toggleSearch = () => {
    // No modo mobile, alternamos a visibilidade do campo de pesquisa
    if (isMobile) {
      setShowSearch(!showSearch);
    }
  };

  // Função para lidar com a pesquisa
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Formata o termo de busca para a URL (substitui espaços por hifens e converte para minúsculas)
      const formattedSearchTerm = searchTerm
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      navigate(`/products?filter=${formattedSearchTerm}`);
    }

    // Se estiver no modo mobile e tiver um termo de busca, esconde o campo depois de buscar
    if (isMobile && searchTerm.trim()) {
      setShowSearch(false);
    }
  };

  // Função para lidar com a tecla Enter
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    // Passamos o estado showSearch como prop para o Container para controlar a altura no mobile
    <Container $showMobileSearch={showSearch} $isAuthPage={isAuthPage}>
      <div className='dropshadow'>
        <div className='header-main'>
          {/* Renderização condicional para o botão de menu */}
          {!isAuthPage && (
            <button className='menu-button' onClick={handleMenuClick}>
              {isMenuOpen ? (
                <img
                  src={MenuVertIcon}
                  alt='Ícone de menu vertical'
                  style={{ height: '24px' }}
                />
              ) : (
                <img src={MenuIcon} alt='Ícone de menu' />
              )}
            </button>
          )}

          <div className={`content-logo ${isAuthPage ? 'center-logo' : ''}`}>
            <Logo />
          </div>

          {!isAuthPage && (
            <>
              <div className='search-input'>
                {/* Mostrar o input apenas quando showSearch for true OU quando não estiver no modo mobile */}
                {(showSearch || !isMobile) && (
                  <InputDefault
                    type='text'
                    placeholder='Pesquisar produtos...'
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyPress}
                    className={
                      isMobile && showSearch ? 'mobile-search-active' : ''
                    }
                  />
                )}

                <div
                  className='search-icon'
                  // No mobile, ao clicar na lupa, alternamos a visibilidade do campo
                  // No desktop, executamos a pesquisa
                  onClick={isMobile ? toggleSearch : handleSearch}
                >
                  <img src={SearchIcon} alt='Ícone de pesquisa' />
                </div>

                <StyledNavLink to='/register'>Cadastre-se</StyledNavLink>
              </div>

              <div className='header-buttons'>
                <PrimaryBtn>
                  <BtnNavLink to='/login'>Entrar</BtnNavLink>
                </PrimaryBtn>

                <img src={CartImage} alt='Imagem do carrinho de compras' />
              </div>
            </>
          )}
        </div>

        {!isAuthPage && (
          <nav className={`header-nav ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul>
              <StyledNavLink to='/'>Home</StyledNavLink>
              <StyledNavLink to='/produtos'>Produtos</StyledNavLink>
              <StyledNavLink to='/categorias'>Categorias</StyledNavLink>
              <StyledNavLink to='/orders'>Meus Pedidos</StyledNavLink>
            </ul>
          </nav>
        )}
      </div>
    </Container>
  );
};

export default Header;