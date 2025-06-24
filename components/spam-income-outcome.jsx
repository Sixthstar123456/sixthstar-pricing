import { motion } from "framer-motion";
import { ShieldCheck, CloudLightning } from "lucide-react";

export const IncomingOutgoing = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 grid-cols-1 gap-10 grid-1300">
        {/* Left Feature Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746446553/freepicdownloader.com_-email-spam-laptop-flat-style-vector-illustration-large_kcrcwh.jpg"
            alt="Security"
            className="w-28 sm:w-36 md:w-40 h-auto object-contain mx-auto sm:mx-0"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              <ShieldCheck className="inline-block w-5 h-5 text-blue-600 mr-2" />
              Incoming Spam Filter
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              The incoming spam filter offers a range of essential functions when configured within your email account. Just like its outgoing counterpart, you can access log search records, a spam quarantine, an incoming delivery queue, and features to train the system on what is considered spam and what is not. These tools provide the necessary controls to effectively manage incoming emails and ensure that your inbox remains organized and free of unwanted messages.
            </p>
          </div>
        </motion.div>

        {/* Right Feature Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746447011/Untitled_design_16_v40yig.png"
            alt="Cloud"
            className="w-28 sm:w-36 md:w-40 h-auto object-contain mx-auto sm:mx-0"
          />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              <CloudLightning className="inline-block w-5 h-5 text-indigo-600 mr-2" />
              Outgoing Spam Filter
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              This service will allow the management of user accounts, as the allotment for sending and receiving emails is limited at your end as well as the end of your customers. If you check under log search, you will see that the spam filter has a set of activities within which the users can view and work. This way, you can manage the identities by adding or deleting users and creating outgoing reports for specific operations with them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomingOutgoing;
