import { Icons } from '@/assets/icons';
import Logo from '@/components/Logo';
import { Input } from '@/components/ui/input';
import { HStack, VStack } from '@/components/ui/Utilities';
import { useTypeSafeTranslation } from '@/hooks/useTypeTranslation';

const Footer = () => {
  const { t } = useTypeSafeTranslation(['common']);
  return (
    <>
      <footer className="bg-[url('/images/background-footer.png')] bg-no-repeat bg-center bg-cover text-white pt-10 sm:pt-[6.5rem] pb-[3.875rem] sm:pb-[6.25rem] justify-center flex">
        <div className="flex flex-col sm:flex-row gap-[4.25rem] container sm:gap-[27rem]">
          <VStack className="gap-10 mx-auto">
            <Logo className="w-[10.2019rem] h-[6rem]" />
            <HStack spacing={24}>
              <Icons.twitter />
              <Icons.facebook />
              <Icons.linkedin />
            </HStack>
          </VStack>
          <HStack className="sm:gap-10 gap-[4.25rem]">
            <VStack className="gap-5 sm:gap-10">
              <p className="font-bold text-2xl leading-[1.875rem] text-white">{t('address')}</p>
              <HStack spacing={8} align={'start'} className="flex-nowrap">
                <Icons.location width={40} height={40} className="min-w-[2.5rem] min-h-[2.5rem]" />
                <VStack className="sm:max-w-[22.625rem] gap-3 text-white text-sm leading-[1.225rem]">
                  <p>{t('addressInfoUS')}</p>
                  <p>{t('addressInfoVietNam')}</p>
                </VStack>
              </HStack>
              <HStack spacing={8}>
                <Icons.phone width={40} height={40} className="min-w-[2.5rem] min-h-[2.5rem]" />
                <HStack className="max-w-[22.625rem] text-white text-sm leading-[1.225rem]" spacing={8}>
                  <p>(+1) 555-0108-000</p>
                  <p>{t('or')}</p>
                  <p>(+236) 555-0108</p>
                </HStack>
              </HStack>
            </VStack>
            <VStack className="gap-5 sm:gap-10">
              <p className="font-bold text-2xl leading-[1.875rem] text-white">{t('subscribe')}</p>
              <VStack spacing={12}>
                <p className="max-w-[25.625rem] text-white text-sm leading-[1.225rem]">
                  {t('subscribeToOurNewsletterAndBeTheFirstToKnowAboutOurUpdates')}
                </p>
                <Input
                  placeholder={t('email')}
                  className="text-sm leading-[1.225rem] rounded-md bg-transparent border border-white placeholder:text-white focus-visible:border-solid "
                  suffix={<Icons.arrowRight width={24} height={24} className="text-white" />}
                />
              </VStack>
            </VStack>
          </HStack>
        </div>
      </footer>
      <p className="text-[1.125rem] leading-[1.4175rem] pt-[2.0156rem] sm:pt-[1.875rem] pb-[29.02px] sm:pb-[1.6875rem] w-full text-center text-white bg-black">
        2017 Copyright. Policy.
      </p>
    </>
  );
};

export default Footer;
