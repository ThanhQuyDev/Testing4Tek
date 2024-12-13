import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Icons } from '@/assets/icons';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { HStack, Show, VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';
import { HEADER_LINK } from '@/lib/const';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const { t, i18n } = useTypeSafeTranslation(['common']);
  const currentLanguage = i18n.language;
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });
    setOpenLanguage(false);
    toggle();
  };
  return (
    <>
      <HStack spacing={24}>
        <Button variant="ghost" size="mixin" onClick={toggle}>
          <Icons.menu />
        </Button>
      </HStack>
      <Sheet open={opened} onOpenChange={toggle}>
        <SheetContent className="bg-background max-w-sm px-4" fullWidth>
          <Popover open={openLanguage} onOpenChange={setOpenLanguage}>
            <PopoverTrigger className="text-white border rounded-md border-[#AFAFAF] justify-center flex items-center bg-background-grayLight absolute top-1 left-4 w-20 h-10">
              <HStack>
                {currentLanguage === 'vi' ? (
                  <Icons.vietNamFlag width={32} height={32} />
                ) : (
                  <Icons.usFlag width={32} height={32} />
                )}
                <Icons.chevronDown className="text-black" />
              </HStack>
            </PopoverTrigger>
            <PopoverContent className="bg-white w-[9.75rem] px-2 py-0" align="start">
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
                    <p className="capitalize font-bold text-black text-[10px] min-w-[4rem]">{t('vietnamese')}</p>
                  </HStack>
                </HStack>
                <div className="mx-auto w-full h-[.0625rem] bg-[#C4C4C4]"></div>
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
          <VStack className="mt-[5.25rem]">
            {HEADER_LINK?.map((item, index) => (
              <a
                onClick={() => toggle()}
                key={index}
                href={item.href}
                className="text-center pt-6 first:pt-0 text-black uppercase font-bold text-sm pb-6 border-b border-background-gray last:border-none"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </VStack>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
