import Link from "next/link";
import bedspace from '../bedspace.json'

const BedSpace = () => {



  return (
    <div className='items-center  flex justify-center flex-col mt-20 mb-20'>
      <h1 className='md:text-[40px] mb-10 text-[30px] font-bold text-center'>Available Spaces</h1>
      {bedspace.map(bed => (

        <div key={bed.id} className="gap-6 items-center justify-center flex flex-col ">


          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className='flex justify-end mx-5 gap-2 mt-8'>
              <br />
              <div className={bed.gender === 'male' ? 'badge badge-info' : 'badge badge-error'}>
                {bed.gender}
              </div>


              <button className="btn font-medium text-[18px]">
                {bed.hostel}
                <div className="badge badge-accent">{bed.name}</div>
                <div className="badge">{bed.price}</div>
              </button>
              <Link className='btn btn-accent' href={bed.contact} target="_blank">Bargain </Link>

            </div>
          </div>



        </div>
      ))}


    </div>
  );
};

export default BedSpace;
