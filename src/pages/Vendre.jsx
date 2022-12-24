import React from 'react';
import { Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { Checkbox } from 'flowbite-react';
import { Button , Radio } from 'flowbite-react';

const Vendre = () => {
    return (
        <div>
          <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Nom"
      />
    </div>
    <TextInput
      id="name"
      type="text"
      placeholder="donner le nom de voiture"
      required={true}
    />
  </div>

  
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="selling_price"
        value="prix"
      />
    </div>
    <TextInput
      id="selling_price"
      type="text"
      placeholder="tapez le prix"
      required={true}
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="km-driven"
        value="kilometrage"
      />
    </div>
    <TextInput
      id="km-driven"
      type="number"
      placeholder="taper le kilometrage"
      required={true}
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="fuel"
        value="carburant"
      />
    </div>
    <TextInput
      id="fuel"
      type="text"
      placeholder="type de carburant"
      required={true}
    />
  </div>

  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="year"
        value="Annee"
      />
    </div>
    <TextInput
      id="year"
      type="number"
      placeholder="Annee de fabrication "
      required={true}
    />
  </div>

            
  <fieldset
  className="flex flex-col gap-4"
  id="radio"
>
  <legend>
    Boite a vitesse 
  </legend>
  <br />
  <div className="flex items-center gap-2">
    <Radio
      id="manuelle"
      name="countries"
      value="USA"
      defaultChecked={true}
    />
    <Label htmlFor="manuelle">
      manuel
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Radio
      id="automatique"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="automatique">
      automatique
    </Label>
  </div>
  <div className="flex items-center gap-2">
    
  </div>
</fieldset>


  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="mileage"
        value="mileage"
      />
    </div>
    <TextInput
      id="mileage"
      type="number"
      placeholder=""
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="engine"
        value="engine"
      />
    </div>
    <TextInput
      id="engine"
      type="number"
      placeholder="tapez engine"
      required={true}
    />
  </div>


  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="max_power"
        value="puissance maximal"
      />
    </div>
    <TextInput
      id="max_power"
      type="numbre"
      placeholder="50 bhp"
      required={true}
    />
  </div>
    
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="seats"
        value="places"
      />
    </div>
    <TextInput
      id="seats"
      type="number"
      placeholder='between 2 et 9'
      required={true}
    />
  </div>



  <fieldset
  className="flex flex-col gap-4"
  id="radio"
>
  <legend>
    Owner
  </legend>
  <br />
  <div className="flex items-center gap-2">
    <Radio
      id="first_owner"
      name="countries"
      value="USA"
      defaultChecked={true}
    />
    <Label htmlFor="first_owner">
     first_owner
    </Label>
  </div>

  <div className="flex items-center gap-2">
    <Radio
      id="second-owner"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="second-owner">
     second-owner
    </Label>
  </div>


  <div className="flex items-center gap-2">
    <Radio
      id="third-owner"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="third-owner">
    third-owner
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Radio
      id="forth & above owner"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="forth & above owner">
     forth & above owner
    </Label>
  </div>
  <div className="flex items-center gap-2">
    <Radio
      id="Test drive car"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="Test drive car">
     Test drive car
    </Label>
  </div>
  <div className="flex items-center gap-2">
    
  </div>
</fieldset>



  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
  </form>
        </div>
    );
}

export default Vendre;
