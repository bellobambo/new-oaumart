import Link from "next/link";
import bedspace from '../bedspace.json'

const BedSpace = () => {
  return (
    <div className='items-center flex flex-col mt-20 mb-20 w-full'>

      <h1 className='text-3xl md:text-4xl lg:text-5xl mb-10 font-bold text-center'>Available Spaces</h1>

      {bedspace.map(bed => (
        <div key={bed.id} className="grid grid-flow-col gap-5 text-center auto-cols-max">

          <div className='flex flex-col sm:flex-row justify-center items-center mx-5 gap-2 mt-8'>

            <div className={bed.gender === 'male' ? 'badge badge-info' : 'badge badge-error'}>
              {bed.gender}
            </div>

            <div className='flex flex-col sm:flex-row gap-2'>

              <button className="btn font-medium text-lg sm:text-xl">
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
