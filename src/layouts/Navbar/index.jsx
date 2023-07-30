import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  useColorModeValue as mode,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdMenu } from 'react-icons/md'
import { RiHeartLine, RiTicketLine } from 'react-icons/ri'
import { CurrencySelect } from './CurrencySelect'
import { Logo } from './Logo'
import { CartCount } from './CartCount'
import { MobileBottomNav } from './MobileBottomNav'
import { NavAction } from './NavAction'
import { NavCategoryMenu } from './NavCategoryMenu'
import { NavCategorySubmenu } from './NavCategorySubmenu'
import { SearchInput } from './SearchInput'

export const Navbar = () => (
          <Flex height="4.5rem" align="center" width={"full"}  mx="auto">
            <HStack flex="24rem" spacing="32px">
              <Text>Travaluv</Text>
            </HStack>

            <Box width="full" mx="8">
              <SearchInput />
            </Box>
            
            <HStack spacing="8" flexShrink={0}>
              <NavAction.Desktop label="Wishlist" icon={RiHeartLine} />
              <NavAction.Desktop label="Sign in" icon={AiOutlineUser} />
              <Box position="relative">
                <NavAction.Desktop label="Tickets" icon={RiTicketLine} />
                <CartCount>1</CartCount>
              </Box>
            </HStack>
          </Flex>
)
