import { PopoverTrigger } from '@radix-ui/react-popover';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Icons } from '@/assets/icons';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { HStack, Show, VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';
import { HEADER_LINK } from '@/lib/const';

const Navbar = () => {
  const { t, i18n } = useTypeSafeTranslation(['common']);
  const [openLanguage, setOpenLanguage] = useState(false);
  const router = useRouter();

  const currentLanguage = i18n.language;
  const changeLanguage = (lang: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
    setOpenLanguage(false);
  };

  return (
    <HStack className="gap-[5.25rem]">
      {HEADER_LINK.map((item, index) => (
        <a key={index} href={item.href} className="hover:text-gray-100 text-white uppercase font-bold text-sm">
          {t(item.labelKey)}
        </a>
      ))}

      <Popover open={openLanguage} onOpenChange={setOpenLanguage}>
        <PopoverTrigger className="text-white">
          <HStack spacing={4}>
            {currentLanguage === 'vi' ? <Icons.vietNamFlag /> : <Icons.usFlag />}
            <Icons.chevronDown className="text-white" />
          </HStack>
        </PopoverTrigger>
        <PopoverContent className="bg-white w-[9.75rem] px-2 py-0" align="end">
          <VStack spacing={0}>
            <HStack
              className="gap-2 justify-end text-black flex-nowrap cursor-pointer"
              onClick={() => changeLanguage('vi')}
            >
              <Show when={currentLanguage === 'vi'}>
                <Icons.check />
              </Show>
              <HStack spacing={4} className="flex-nowrap">
                <Icons.vietNamFlag className="!w-10 aspect-square" />
                <p className="capitalize font-bold text-[10px] min-w-[4rem]">{t('vietnamese')}</p>
              </HStack>
            </HStack>
            <div className="mx-auto w-[8.75rem] h-[.0625rem] bg-[#C4C4C4]"></div>
            <HStack
              className="gap-2 justify-end text-black flex-nowrap cursor-pointer"
              onClick={() => changeLanguage('en')}
            >
              <Show when={currentLanguage === 'en'}>
                <Icons.check />
              </Show>
              <HStack spacing={4} className="flex-nowrap">
                <Icons.usFlag className="w-10 aspect-square" />
                <p className="capitalize font-bold text-[10px] min-w-[4rem]">{t('english')}</p>
              </HStack>
            </HStack>
          </VStack>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};

export default Navbar;
