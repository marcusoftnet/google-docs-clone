import StartDocumentButton from './StartDocumentButton';
import StartDocumentHeader from './StartDocumentHeader';
const NewDocument = () => {
  return (
    <section className='bg-[#F8F9FA] pb-10 px-10'>
      <div className='max-w-3xl mx-auto'>
        <StartDocumentHeader />

        <StartDocumentButton />
      </div>
    </section>
  );
};

export default NewDocument;
