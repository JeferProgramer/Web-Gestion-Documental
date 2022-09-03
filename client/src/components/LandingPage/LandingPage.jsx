import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'
import './landinpage.css'

function LandingPage() {

  return (
    <>
            <div className='landingPage'>
            
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.3 }}
                animate={{
                  opacity: 1
                }}>
                <Container maxW={'8xl'} bgColor={'#bed2ed'}>
                  <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                        <Flex
                      flex={1}
                      justify={'center'}
                      align={'center'}
                      position={'relative'}
                      w={'full'}>
                      <Box
                        position={'relative'}
                        height={'500px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        >
                        <IconButton
                          aria-label={'Play Button'}
                          variant={'ghost'}
                          _hover={{ bg: 'transparent' }}
                          size={'lg'}
                          color={'white'}
                          position={'absolute'}
                          left={'50%'}
                          top={'50%'}
                          transform={'translateX(-50%) translateY(-50%)'}
                        />
                        <Image
                          alt={'Hero Image'}
                          fit={'cover'}
                          align={'center'}
                          w={'100%'}
                          h={'100%'}
                          src={
                            'https://www.docunecta.com/hubfs/DocunectaWeb2019/img_portada_slide.svg'
                          }
                          />
                      </Box>
                    </Flex>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                      <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                          as={'span'}
                          position={'relative'}
                          _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'green.100',
                            zIndex: -1,
                          }}>
                          Achrono Documental
                        </Text>
                        <br />
                        <Text as={'span'} color={'blue.300'}>
                          Prestacion de productos y servicios archivisticos
                        </Text>
                      </Heading>
                      <Text color={'black'}>
                        Brindamos servicios personalizados, ajustados, drigidos y monitoriados, que permitiran la aplicabilidad de estrategias y procesos archivisticos que se a justen a las necesidades , con el fin de mejorar los flujos de informacion y manejo de datos , generando beneficios e impactos positivos.

                        Somos una plataforma con profesiones en gestion documental online donde puedes realizar sesiones a distancia.
                      </Text>
                    </Stack>
                  </Stack>
                </Container>
              </motion.div>
            </div>
    </>
  )
}


export default LandingPage