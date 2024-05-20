"use client";

import Button from "./Button";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default  function AuthButtons() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-between items-center md:gap-x-4 gap-x-1">
      <div>
        <Button className="bg-transparent text-primary font-medium text-xs border border-primary hover:text-secondary hover:border-secondary hover:font-semibold transition duration-300 ease-in-out">
          Sign up
        </Button>
      </div>
      <div>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-primary px-6 py-3 font-medium text-xs text-white hover:bg-secondary hover:opacity-100 transition duration-300 ease-in-out"
        >
          Log in
        </Button>
      </div>
      {showModal && <LoginModal setShowModal={setShowModal} />}
    </div>
  );
  
};
