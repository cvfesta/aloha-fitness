import { Modal } from 'react-bootstrap'

const WAIVER_TEXT = `In consideration of the risk of injury that exists while participating in strength and yoga class (hereinafter the "Activity"); and
In consideration of my desire to participate in said Activity and being given the right to participate in same;
I hereby, for myself, my heirs, executors, administrators, assigns, or personal representatives (hereinafter collectively, "Releasor," "I" or "me", which terms shall also include Releasor's parents or guardian if Releasor is under 18 years of age), knowingly and voluntarily enter into this Waiver and Release of Liability and hereby waive any and all rights, claims or causes of action of any kind arising out of my participation in the Activity; and
I hereby release and forever discharge Aloha Fitness, located at 304 S Jones Blvd, Las Vegas, Nevada 89449, their affiliates, managers, members, agents, attorneys, staff, volunteers, heirs, representatives, predecessors, successors and assigns (collectively "Releasees"), from any physical or psychological injury that I may suffer as a direct result of my participation in the aforementioned Activity.
I am voluntarily participating in the aforementioned Activity and I am participating in the Activity entirely at my own risk. I am aware of the risks associated with participating in this Activity, which may include, but are not limited to: physical or psychological injury, pain, suffering, illness, disfigurement, temporary or permanent disability (including paralysis), economic or emotional loss, and death. I understand that these injuries or outcomes may arise from my own or others' negligence, conditions related to travel to and from the Activity, or from conditions at the Activity location(s). Nonetheless, I assume all related risks, both known and unknown to me, of my participation in this Activity.
I further agree to indemnify, defend and hold harmless the Releasees against any and all claims, suits or actions of any kind whatsoever for liability, damages, compensation or otherwise brought by me or anyone on my behalf, including attorney's fees and any related costs.
I further acknowledge that Releasees are not responsible for errors, omissions, acts or failures to act of any party or entity conducting a specific event or activity on behalf of Releasees. In the event that I should require medical care or treatment, I authorize Aloha Fitness to provide all emergency medical care deemed necessary, including but not limited to, first aid, CPR, the use of AEDs, emergency medical transport, and sharing of medical information with medical personnel. I further agree to assume all costs involved and agree to be financially responsible for any costs incurred as a result of such treatment. I am aware and understand that I should carry my own health insurance.
I further acknowledge that this Activity may involve a test of a person's physical and mental limits and may carry with it the potential for death, serious injury, and property loss. I agree not to participate in the Activity unless I am medically able and properly trained, and I agree to abide by the decision of the Aloha Fitness official or agent, regarding my approval to participate in the Activity.
I hereby acknowledge that I have carefully read this "Waiver and Release" and fully understand that it is a release of liability. I expressly agree to release and discharge Aloha Fitness and all of its affiliates, managers, members, agents, attorneys, staff, volunteers, heirs, representatives, predecessors, successors and assigns, from any and all claims or causes of action and I agree to voluntarily give up or waive any right that I otherwise have to bring a legal action against Aloha Fitness for personal injury or property damage.
To the extent that statute or case law does not prohibit releases for ordinary negligence, this release is also for such negligence on the part of Aloha Fitness, its agents, and employees.
I agree that this Release shall be governed for all purposes by Nevada law, without regard to any conflict of law principles. This Release supersedes any and all previous oral or written promises or other agreements.
In the event that any damage to equipment or facilities occurs as a result of my or my family's or my agent's willful actions, neglect or recklessness, I acknowledge and agree to be held liable for any and all costs associated with any such actions of neglect or recklessness.
This Waiver and Release of Liability shall remain in effect for the duration of my participation in the Activity, during this initial and all subsequent events of participation.
This Agreement was entered into at arm's-length, without duress or coercion, and is to be interpreted as an agreement between two parties of equal bargaining strength. Both Participant, and Aloha Fitness agree that this Agreement is clear and unambiguous as to its terms, and that no other evidence shall be used or admitted to alter or explain the terms of this Agreement, but that it will be interpreted based on the language in accordance with the purposes for which it is entered into.
In the event that any provision contained within this Release of Liability shall be deemed to be severable or invalid, or if any term, condition, phrase or portion of this Agreement shall be determined to be unlawful or otherwise unenforceable, the remainder of this Agreement shall remain in full force and effect. If a court should find that any provision of this Agreement to be invalid or unenforceable, but that by limiting said provision it would become valid and enforceable, then said provision shall be deemed to be written, construed and enforced as so limited.

I, the undersigned Participant, affirm that I am of the age of 18 years or older, and that I am freely signing this Agreement. I certify that I have read this Agreement, that I fully understand its content and that this Release cannot be modified orally. I am aware that this is a release of liability.

Parent / Guardian Waiver for Minors
In the event that the Participant is under the age of consent (18 years of age), then this release must be signed by a parent or guardian.`

const WAIVER_PARAGRAPHS = WAIVER_TEXT.split(/\n+/).filter((p) => p.trim().length > 0)

/** Waiver / release-of-liability text, shown in a scrollable modal. */
export default function TermsModal({ show, onHide }: { show: boolean; onHide: () => void }) {
  return (
    <Modal show={show} onHide={onHide} scrollable size="lg">
      <Modal.Header closeButton>
        <Modal.Title as="h1" className="fs-5">
          Waiver and release of liability
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-legal">
        {WAIVER_PARAGRAPHS.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn-outline-ink" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  )
}
