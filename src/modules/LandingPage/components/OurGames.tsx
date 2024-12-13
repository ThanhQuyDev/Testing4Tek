import React, { useMemo } from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

import { CardItem } from './CardItem';

const GAME = [
  { cardImage: '/images/cards/card-1.png', name: 'E-Space' },
  { cardImage: '/images/cards/card-2.png', name: 'Kingland' },
  { cardImage: '/images/cards/card-3.png', name: 'The Last Game' },
  { cardImage: '/images/cards/card-4.png', name: 'G-Dragon' },
  { cardImage: '/images/cards/card-5.png', name: 'Pirates' },
  { cardImage: '/images/cards/card-6.png', name: 'Witch Party' },
  { cardImage: '/images/cards/card-7.png', name: 'Rocky' },
  { cardImage: '/images/cards/card-8.png', name: 'Blue Fire' },
  { cardImage: '/images/cards/card-9.png', name: 'Magic Tree' },
  { cardImage: '/images/cards/card-10.png', name: 'Aborigines' },
  { cardImage: '/images/cards/card-11.png', name: 'Cinderella' },
  { cardImage: '/images/cards/card-12.png', name: 'Egypt Game' },
];
export const OurGames = () => {
  const { t } = useTypeSafeTranslation(['common']);

  const renderCard = useMemo(() => {
    return GAME?.map((item, index) => (
      <CardItem
        key={index}
        card={item}
        className={`${index % 4 === 1 || index % 4 === 3 ? 'top-9 sm:top-[7.375rem]' : ''}`}
      />
    ));
  }, []);

  return (
    <VStack className="gap-10 sm:gap-20 container" id="games">
      <VStack className="gap-4 sm:gap-[1.5288rem]" align={'center'}>
        <p className="text-[2.5rem] sm:text-[3.75rem] font-[900] leading-[3.125rem] sm:leading-[3.75rem] text-center font-serif capitalize">
          {t('ourGames')}
        </p>
        <p className="text-sm leading-[1.225rem] text-primary-grayDescription text-center w-full sm:w-[53.75rem]">
          {t('asAPioneerOfMobileAppGamification')}
        </p>
      </VStack>
      <div className="grid grid-cols-2 sm:grid-cols-4 pb-9 sm:pb-[7.375rem] justify-center gap-[.9375rem] sm:gap-10 w-full sm:w-fit mx-auto">
        {renderCard}
      </div>
    </VStack>
  );
};
